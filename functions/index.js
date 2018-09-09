const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.actualizarAsistencia = functions.firestore
	.document('ASISTENCIA/{uId}')
	.onUpdate((change, context) => {
		const actual = change.after.data();
		const anterior = change.before.data();
		/*
		console.log(">>>>>>>>> actual", actual);
		console.log(">>>>>>>>> anterior", anterior);
		console.log(">>>>>>>>> context", context);
		*/

		const locales = admin.firestore().collection('LOCAL');

		if ((actual.asistencia !== anterior.asistencia) &&  actual.asistencia) {
			// total asistencia
			// traer local
			// aumentar total_asistencia + 1

			const local = locales
	        .where("cod_local", "==", actual.cod_local)
	        .get()
	        .then(querySnapshot => {
	           	querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    const local = doc.data();
                    const total_asistencia = local.total_asistencia+ 1;
                    locales.doc(doc.id).update({total_asistencia: total_asistencia})
                    .then(function() {
                        console.log("Se actualizo el total");
                    }).catch(function(error) {
                        console.error("Error al actualizar total: ", error);
                    });
                });
		    }).catch(err => console.log(err) )
		

		} else if ((actual.salida !== anterior.salida) &&  actual.salida) {
			// total salida
		}
	});