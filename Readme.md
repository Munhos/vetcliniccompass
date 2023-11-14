►--GET-----
  •< /tutors > Mostra todos os tutores.
►--POST----
  •< /pet/tutorId > Adiciona um pet para um tutor específico.
  •< /tutor > Adiciona um tutor e seu pet.
►--PUT-----
  •< /tutor/tutorId > Atualiza um tutor.
  •< /pet/petId/tutor/tutorId > Atualiza um pet de um tutor.
►--DELETE--
  •< /tutor/tutorId > Deleta um tutor.
  •< /pet/petId/tutor/tutorId > Deleta um pet de um tutor.

Para a codificação foi utilizado Typescript, Node, Yarn e MongoDB.

---EXEMPLO DE ENTRADA DE DADOS---
*Todos os dados são obrigatorios.
*Obrigatorio pelomenos 1 pet em cada tutor.
{
	"id":1,
	"name":"name",
	"phone":"phone",
	"email":"email",
	"date_of_birth":"date_of_birth",
	"zipCode":"zipcode",
	"pets":[{
				"id": 1,
				"idTutor":1,
				"name": "Pet name",
				"species": "species",
				"carry": "carry",
				"weight": 1,
				"date_of_birth": "date_of_birth"
				}]
}
