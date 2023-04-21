import Index from './src/Index.svelte';

import './src/app.css';

const app = new Index({
    'target': document.querySelector('#app')
});

export default app;