const btnUpdate = document.querySelector("#btnUpdate");
const form = document.querySelector("table tr form");

btnUpdate.addEventListener("click", async (e) => {
	e.preventDefault();
	//vars
	const id = btnUpdate.dataset.ide;	
	const name = form.elements["name"].value
	const pos = form.elements["pos"].value
	const hd = form.elements["hd"].value
	
	//haciendo el fetch
	await fetch(`/${id}`, { 
		method: "put",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({name, position: pos, hire_date: hd}) 
	})
		.then(res => res.json())
		.then(data => {
			if(data.status !== true){
				Swal.fire("Información!", data.msg, "success");
				setTimeout(() => {
					window.location.href="/"
				}, 2000)
			}else{
				Swal.fire("Información!", data.msg, "error");
			}
		})
		.catch(err => console.log(err))
});