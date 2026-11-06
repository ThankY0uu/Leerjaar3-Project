export default function Custom404() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 selection:bg-pink-500 selection:text-white">
            <div className="max-w-2xl w-full text-center space-y-6">
<div> not found cuh</div>

                {/* Actie knop */}
                <div>

                    <a
                        href="/"
                        className="inline-block px-8 py-3 rounded-xl font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Terug naar Home 🚀
                    </a>
                </div>

            </div>
        </div>
    );
}