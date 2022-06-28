import Slide from "./slide";

export default function Dashboard(){
    return(
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                    </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 text-white">  خروج </div>
                        </div>
                    </div>
                </div>
            </nav>
        
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main>
                <div  className="py-3">
                    <Slide />
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-28">
                        <div className="px-64 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}