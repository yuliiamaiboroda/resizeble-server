import { Text } from './models/text.js';
import { Count } from './models/count.js';

export default function main() {
  try {
    Text.sync({ force: true });
    Count.sync({ force: true });
    console.log('Successfully synced models');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

main();
