const deleteButton = document.querySelector("#de");

deleteButton.addEventListener("click", async () => {
	
	const id = deleteButton.dataset.id

	await fetch(`/${id}`, {method: "delete" })
			.then(res => res.json())
			.then(data =>  {
				if(data.e !== true){
					Swal.fire("Borrado con éxito", "El usuario fue borrado con éxito", "success")
					setTimeout(() => {
						window.location.href = "/";
					}, 2000)
				} else {
					Swal.fire("Oops!", "Tuvimos problemas para eliminar el usuario", "error")
				}
			})
			.catch(e => console.error(e))
})