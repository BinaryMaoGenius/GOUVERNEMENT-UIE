import { Users, Quote } from "lucide-react";

export function VicePresidentMessage() {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden bg-white">
            <div className="container-section">
                <div className="bg-white rounded-3xl p-5 md:p-12 border border-slate-200 relative overflow-hidden group hover:border-blue-200 transition-all duration-500 shadow-xl shadow-slate-100">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-blue-600">
                        <Quote size={120} />
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                            <div>
                                <p className="text-blue-600 font-body text-xs uppercase tracking-[0.3em] font-bold">
                                    Message du Vice-Président
                                </p>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 italic">
                                    Un Mot de Mohamed Sogodogo
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Avatar */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-48 h-64 md:w-64 md:h-80 rounded-2xl bg-slate-100 p-1 shadow-lg group-hover:scale-[1.02] transition-transform duration-500 ring-4 ring-slate-50 overflow-hidden">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-slate-200">
                                        <img
                                            src="/images/Madina_Mohamed.jpeg"
                                            alt="Madina & Mohamed"
                                            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex-1">
                                <div className="relative">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                                    <blockquote className="text-base md:text-lg text-slate-600 font-body leading-relaxed italic pl-6 md:pl-8">
                                        <p className="mb-4">
                                            Chers étudiants, notre force réside dans notre unité et notre détermination à bâtir ensemble une université d'excellence.
                                        </p>
                                        <p>
                                            Chaque jour, nous travaillons pour que vos voix soient entendues et que vos aspirations deviennent réalité. Ensemble, nous écrivons l'histoire de l'UIE.
                                        </p>
                                    </blockquote>
                                </div>

                                {/* Signature */}
                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1">
                                            <p className="font-display font-bold text-lg text-slate-900">
                                                Mohamed Sogodogo
                                            </p>
                                            <p className="text-sm text-blue-600 font-medium">
                                                Vice-Président du Gouvernement UIE
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                            <Users className="w-6 h-6 text-blue-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
