import { environment } from '../../constants';

const STORE_ROUTE = '/tienda';
const routes = {
  BASE: '/',
  LOGIN: '/entrar',
  REGISTER: '/registrarse',
  CHANGE_PASSWORD: '/cambiar-contrasena',
  FORGOT_PASSWORD: '/olvido-contrasena',
  NEW_PASSWORD: '/nueva-contrasena',
  DROP_OUT: '/darme-de-baja',
  KNOW_US: '/conocenos',
  BLOG: '/blog',
  MALAS: '/malas',
  SIZE_GUIDES: '/tallas',
  SHIPPING_PROCESSING: '/tramitacion-envio',
  FAQ: '/preguntas-frecuente',
  PRIVACY_POLICY: '/politicas-d-privacidad',
  RETURN_POLICY: '/politica-d-devoluciones',
  COOKIES_POLICY: '/politica-cookies',
  CHECKOUT: '/checkout',
  CART: '/cesta',
  STORE: STORE_ROUTE,
  STORE_DEPARTMENTS: `${STORE_ROUTE}/departamentos`,
  STORE_PRODUCTS: `${STORE_ROUTE}/productos`,
  INVALID_TOKEN: `/token-invalido`,
  GOOGLE_LOGIN: `${environment.API}/auth/google`,
};

export default routes;
