$(document).ready(function() {
    $('#kt_table_users').DataTable({
        "paging": true,
        "ordering": true,
        columnDefs: [
            { orderable: !1, targets: 0 },
          ],
        pageLength: 10,
        lengthChange: !1,
        
        "dom": '<"top">rt<"bottom"p><"clear">',
        "language": {
            "lengthMenu": "Afficher _MENU_ enregistrements par page",
            "zeroRecords": "Aucun enregistrement trouvé",
            "info": "Affichage de _START_ à _END_ sur _TOTAL_ enregistrements",
            "infoEmpty": "Affichage de 0 à 0 sur 0 enregistrements",
            "infoFiltered": "(filtré de _MAX_ enregistrements au total)",
            "search": "Rechercher :",
            "paginate": {
                "first": "Premier",
                "last": "Dernier",
                "next": "Suivant",
                "previous": "Précédent"
            },
            "emptyTable": "Aucune donnée disponible dans le tableau"
        }
    });
});