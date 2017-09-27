import { app } from './app';
import { PORT } from './config';

// Star server
app.set('port', (PORT));
// app.listen(app.get('port'));

app.listen(app.get('port'), function() {
  console.log('Listening app in port: ' + PORT);
});
