const menuItems = [
    {
      icon: '<i class="ki-duotone ki-home-2 fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      href: '/',
      label: 'Home'
    },
    {
      icon: '<i class="ki-duotone ki-wrench fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      href:"javascript:void(0);",
      label: 'Réparation',
      alert: 1,
      children: [
        {
          href: '/reparation/new.html',
          label: 'Nouvelle réparation'
        },
        {
          href: '/reparation/index.html',
          label: 'Listes des réparations'
        },
        {
          href: '/reparation/devis_list.html',
          label: 'Listes des devis'
        },
        {
          href: '/reparation/extern.html',
          label: 'Réparation externes'
        },
        {
          href: '/reparation/archive.html',
          label: 'Archive'
        }
      ]
    },
    {
      icon: '<i class="ki-duotone ki-profile-user fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>',
      href:"/client/index.html",
      label: 'Nos Clients'
    },
    {
      icon: '<i class="ki-duotone ki-parcel fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>',
      href:"javascript:void(0);",
      label: 'Stock',
      children: [
        {
          href: '/articles/index.html',
          label: 'Articles'
        },
        {
          href: '/articles/alert_stock.html',
          label: 'Alerte stock'
        },
        {
          href: '/categories/index.html',
          label: 'Catégories articles'
        },
        {
          href: '/articles/casierStockage.html',
          label: 'Lieu de stockage'
        },
        {
          href: '/fournisseurs/index.html',
          label: 'Fournisseurs'
        },
        {
          href: '/articles/destockage.html',
          label: 'Déstockage'
        },
      ]
    },
    {
      icon: '<i class="ki-duotone ki-calendar-2 fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>',
      label: 'Commande',
      href: '/commande/index.html'
    },
    {
      icon: '<i class="ki-duotone ki-calendar-tick fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></i>',
      label: 'Commande PEC',
      alert:5,
      href: '/commande/index_pec.html'
    },
    {
      icon: '<i class="ki-duotone ki-handcart fs-2x" style="color:white"></i>',
      href:"javascript:void(0);",
      label: 'Ventes',
      children: [
        {
          href: '/vente/new.html',
          label: 'Nouvelle vente'
        },
        {
          href: '/vente/index.html',
          label: 'Historique'
        },
        {
          href: '/vente/devis_vente.html',
          label: 'Vente devis'
        }
      ]
    },
    {
      icon: '<i class="ki-duotone ki-purchase fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      label: 'Caisse virtuelle',
      href: '/caisse_virtuelle/index.html" target="_blank'
    },
    {
      icon: '<i class="ki-duotone ki-arrow-circle-left fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      href:"javascript:void(0);",
      label: 'Rachat',
      children: [
        {
          href: '/rachat/new.html',
          label: 'Nouveau rachat'
        },
        {
          href: '/rachat/index.html',
          label: 'Liste des rachats'
        }
      ]
    },
    {
      icon: '<i class="ki-duotone ki-file fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      href:"javascript:void(0);",
      label: 'Nos factures',
      children: [
        {
          href: '/facture/index.html',
          label: 'Liste des factures'
        },
        {
          href: '/facture/accompte_facture.html',
          label: 'Liste des accomptes'
        },
        {

          href: '/avoir/index.html',
          label: 'Avoir'
        },
      ]
    },
    {
      icon: '<i class="ki-duotone ki-bill fs-2x" style="color:white"><span class="path1"></span><span class="path2"><span class="path3"></span><span class="path4"><span class="path5"></span><span class="path6"></span></i>',
      href:"javascript:void(0);",
      label: 'Caisse',
      children: [
        {
          href: '/caisse/index.html',
          label: 'Caisse'
        },
        {
          href: '/facture/facture_export.html',
          label: 'Historique des encaissements'
        },
        {
          href: '/caisse/statistique.html',
          label: 'Statistique'
        },
      ]
    },
    {
      icon: '<i class="ki-duotone ki-setting-4 fs-2x" style="color:white"></i>',
      href:"javascript:void(0);",
      label: 'Ma boutique',
      children: [
        {
          href: '/employee/index.html',
          label: 'Employées'
        },
        {
          href: '/boutique/fonctions.html',
          label: 'Fonction employeur'
        },
        {
          href: '/partenaire/index.html',
          label: 'Partenaires'
        },
        {
          href: '/statut/index.html',
          label: 'Statut'
        },
        {
          href: '/mode_paiement/index.html',
          label: 'Mode paiements'
        },
        {
          href: '/boutique/materiel_type.html',
          label: 'Type de matériel'
        },
        {
          href: '/condition/index.html',
          label: 'Conditions'
        },
        {
          href: '/boutique/index.html',
          label: 'Configurations'
        },
        {
          href: '/impression/index.html',
          label: 'Impression'
        },
        {
          href: '/boutique/cassier.html',
          label: 'Casier de rangement'
        },
      ]
    },
    {
      icon: '<i class="ki-duotone ki-calendar fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span></i>',
      label: 'Calendrier',
      href: '/calendar/index.html'
    },  
    {
      icon: '<i class="ki-duotone ki-archive fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>',
      label: 'Boîte à idée',
      href: '/boite_idee/new.html'
    },  
    {
      icon: '<i class="ki-duotone ki-question-2 fs-2x" style="color:white"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>',
      label: 'Support technique',
      href: '/ticket/index.html'
    }, 
  ];

  
  function generateMenu(menuItems) {
    const currentUrl = window.location.pathname;
    let menuHTML = '';
  
    menuItems.forEach(item => {
      let isHere = currentUrl === item.href;
      let itemHTML = `
        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2${isHere ? ' here' : ''}">
          <a href="${item.href}" class="menu-link menu-center">
            <span class="menu-icon me-0">
              ${item.icon}
            </span>
          </a>
          <div class="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
            <div class="menu-item">
              <div class="menu-content d-flex justify-content-between align-items-center">
                <span class="menu-section fs-5 fw-bolder ps-1 py-1">${item.label}</span>`;
  
      if (item.alert > 0) {
        itemHTML += `
                <span class="badge badge-square badge-danger">${item.alert}</span>`;
      }
  
      itemHTML += `
              </div>
            </div>`;
  
      if (item.children) {
        item.children.forEach(child => {
          const isActive = currentUrl === child.href;
          if (isActive) {
            isHere = true;
          }
          itemHTML += `
            <div class="menu-item">
              <a class="menu-link${isActive ? ' active' : ''}" href="${child.href}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">${child.label}</span>
              </a>
            </div>`;
        });
      }
  
      itemHTML += `
          </div>
        </div>`;
  
      if (isHere) {
        itemHTML = itemHTML.replace('menu-item py-2', 'menu-item py-2 here');
      }
  
      menuHTML += itemHTML;
    });
  
    return menuHTML;
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const menu = generateMenu(menuItems);
    document.getElementById('kt_aside_menu').innerHTML = menu;
  });
  

  
