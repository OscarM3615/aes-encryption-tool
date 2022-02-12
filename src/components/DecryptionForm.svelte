<script>
	import { secretKey } from '../stores';
	import { decrypt } from '../utils/aes';

	let encoded = '';
	let result = '';

	const decryptText = () => {
		result = decrypt(encoded, $secretKey);
	};
</script>

<div class="container pt-4">
	<p class="h3">Descifrado</p>

	<form on:submit|preventDefault={decryptText}>
		<div class="mb-3">
			<label for="secretKey" class="form-label">Clave secreta</label>
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
			<small class="text-muted">
				Debe ser la misma clave utilizada para cifrar el mensaje original.
			</small>
		</div>

		<div class="row mb-2">
			<div class="col col-12 col-md-6">
				<label for="encoded" class="form-label">Mensaje codificado</label>
				<textarea
					id="encoded"
					class="form-control resize-none"
					placeholder="Mensaje codificado"
					rows="8"
					bind:value={encoded}
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
			<button type="submit" class="btn btn-primary">Descifrar mensaje</button>
		</div>
	</form>
</div>
