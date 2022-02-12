<script>
	import { TabContent, TabPane } from 'sveltestrap';
	import Titlebar from './components/Titlebar.svelte';
	import EncryptionForm from './components/EncryptionForm.svelte';
	import DecryptionForm from './components/DecryptionForm.svelte';
	import About from './components/About.svelte';
</script>

<Titlebar />

<div>
	<TabContent>
		<TabPane tabId="encrypt" tab="Encriptar" active>
			<EncryptionForm />
		</TabPane>

		<TabPane tabId="decrypt" tab="Desencriptar">
			<DecryptionForm />
		</TabPane>

		<TabPane tabId="about" tab="Acerca de">
			<About />
		</TabPane>
	</TabContent>
</div>
