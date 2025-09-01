import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          Blog Pessoal
          <div className="flex gap-4">
            Postagens Temas Cadastrar tema Perfil
            <Link to="" onClick={logout} className="houver:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
