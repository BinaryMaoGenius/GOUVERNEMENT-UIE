import postgres from 'postgres';

const sql = postgres(process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL!, {
    ssl: 'require',
});

interface SubmissionBody {
    type: string;
    nom: string;
    prenom: string;
    email: string;
    telephone?: string;
    niveau: string;
    poste?: string;
    pole?: string;
    message?: string; // For 'motivation' or 'idea'
}

export default async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const body = await req.json() as SubmissionBody;

        // Validations de base
        if (!body.nom || !body.prenom || !body.email || !body.niveau || !body.type) {
            return new Response(JSON.stringify({ error: 'Champs obligatoires manquants' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Création de la table si elle n'existe pas
        await sql`
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        nom VARCHAR(100) NOT NULL,
        prenom VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telephone VARCHAR(20),
        niveau VARCHAR(10) NOT NULL,
        poste VARCHAR(100),
        pole VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        // Insertion des données
        await sql`
      INSERT INTO submissions (
        type, nom, prenom, email, telephone, niveau, poste, pole, message
      ) VALUES (
        ${body.type}, 
        ${body.nom}, 
        ${body.prenom}, 
        ${body.email}, 
        ${body.telephone || null}, 
        ${body.niveau}, 
        ${body.poste || null}, 
        ${body.pole || null}, 
        ${body.message || null}
      )
    `;

        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (error) {
        console.error('Error processing submission:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
};
