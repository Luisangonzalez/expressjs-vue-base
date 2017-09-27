/* ********************************************** */
/* CENTRALIZE ALL SETTINGS: ENV, URL, SENTRY, DB  */
/* ********************************************** */

const PORT = process.env.PORT ?
  process.env.PORT :
  '5000';

export { PORT };
