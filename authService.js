import { 
    getAuth, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

class FirebaseAuthService {
    #auth;

    constructor(app){
        this.#auth = getAuth(app);
    }

    criarUsuarioComEmailESenha(email, senha){
        return createUserWithEmailAndPassword(this.#auth, email, senha)
            .then((credencial) => {
                console.log("Usuário criado:", credencial.user);
                return { sucesso: true, usuario: credencial.user };
            })
            .catch((erro) => {
                console.error("Erro ao criar usuário:", erro);
                return { sucesso: false, erro };
            });
    }
}

export default FirebaseAuthService;
