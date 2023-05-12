import { sequelize } from './src/config/database';
import { app } from './src/app';

sequelize.sync();

app.listen(8000, () => {
  console.log('app running 8000');
});
