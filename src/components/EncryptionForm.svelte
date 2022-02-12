<script>
	import { secretKey } from '../stores';
	import { getRandomKey } from '../utils/random';
	import { encrypt } from '../utils/aes';

	let message = '';
	let result = '';

	const generateKey = () => {
		secretKey.set(getRandomKey());
	};

	const encryptText = () => {
		result = encrypt(message, $secretKey);
	};
</script>

<div class="container pt-4">
	<p class="h3">Cifrado</p>

	<form on:submit|preventDefault={encryptText}>
		<div class="mb-3">
			<label for="secretKey" class="form-label">Clave secreta</label>
			<div class="d-flex">
				<input
					type="text"
					id="secretKey"
					class="form-control"
					placeholder="supersecretkey12"
					minlength="16"
					maxlength="16"
					bind:value={$secretKey}
					required
				/>

				<button
					type="button"
					class="btn text-primary text-nowrap"
					on:click={generateKey}
				>
					Crear clave
				</button>
			</div>
			<small class="text-muted">
				La clave debe tener una longitud de 16 caracteres (AES-128).
			</small>
		</div>

		<div class="row mb-2">
			<div class="col col-12 col-md-6">
				<label for="message" class="form-label">Mensaje a cifrar</label>
				<textarea
					id="message"
					class="form-control resize-none"
					placeholder="Mensaje"
					rows="8"
					bind:value={message}
					required
				/>
			</div>

			<div class="col col-12 col-md-6">
				<label for="result" class="form-label">Resultado</label>

				<textarea
					id="result"
					class="form-control resize-none"
					placeholder="Resultado"
					rows="8"
					readonly
					bind:value={result}
				/>
			</div>
		</div>

		<div class="d-flex justify-content-center mb-4">
			<button type="submit" class="btn btn-primary">Cifrar mensaje</button>
		</div>
	</form>
</div>
