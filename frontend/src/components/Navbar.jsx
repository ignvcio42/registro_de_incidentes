import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ambulance  } from "lucide-react";


export default function Navbar() {
return (
    <header className="text-gray-700 bg-white shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* Logo + nombre */}
            <NavLink
                to="/"
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
                <div className="w-10 h-10 text-white bg-indigo-500 rounded-full flex items-center justify-center">
                    <Ambulance className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="ml-3 text-xl">Incidentes ZACH</span>
            </NavLink>

            {/* Links */}
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-indigo-600 font-semibold" : "hover:text-gray-900"
                    }
                >
                    Registrar
                </NavLink>
                <NavLink
                    to="/incidentes"
                    className={({ isActive }) =>
                        isActive ? "text-indigo-600 font-semibold" : "hover:text-gray-900"
                    }
                >
                    Listado
                </NavLink>
            </nav>

            {/* Botónes*/}
            <Button 
                variant="outline" 
                className="mt-4 md:mt-0 ml-0 md:ml-4 cursor-pointer"
                onClick={() => window.open('https://github.com/ignvcio42', '_blank')}
            >
                GitHub
            </Button>
        </div>
    </header>
);
}
