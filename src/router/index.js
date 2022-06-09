import { createRouter, createWebHistory } from 'vue-router'
import ConnexionView from '../views/ConnexionView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import AccueilView from '../views/AccueilView.vue'
import AproposView from '../views/AproposView.vue'
import PassView from '../views/PassView.vue'
import FilDiscussionView from '../views/FilDiscussionView.vue'
import TchatView from '../views/TchatView.vue'
import AperçuAideView from '../views/AperçuAideView.vue'
import DemandeAideView from '../views/DemandeAideView.vue'
import MentionsView from '../views/MentionsView.vue'
import ProfilView from '../views/ProfilView.vue'
import ModifView from '../views/ModifProfil.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/accueil', name: 'Accueil', component: AccueilView },
    { path: '/', name: 'Connexion', component: ConnexionView },
    { path: '/inscription', name: 'Inscription', component: InscriptionView },
    { path: '/apropos', name: 'Apropos', component: AproposView },
    { path: '/pass', name: 'Pass', component: PassView },
    { path: '/fildiscussion', name: 'Fil', component: FilDiscussionView },
    { path: '/tchat', name: 'Tchat', component: TchatView },
    { path: '/apercu/:id', name: 'Apercu', component: AperçuAideView },
    { path: '/demande', name: 'Demande', component: DemandeAideView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/profil', name: 'Profil', component: ProfilView },
    { path: '/modif', name: 'ModifView', component: ModifView },



  ]
})

export default router
