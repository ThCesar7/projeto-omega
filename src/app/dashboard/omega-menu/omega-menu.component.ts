import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'omega-menu',
  templateUrl: './omega-menu.component.html',
  styleUrls: ['./omega-menu.component.scss']
})
export class OmegaMenuComponent implements OnInit {
  items!: MenuItem[];
  items2!: MenuItem[];

  constructor(
    public serviceLogin: LoginService
  ){}

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },
          {
              label: 'Users',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-fw pi-users',
                  }
              ]
          },
          {
              label: 'Events',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                  },
                  {
                      label: 'Archieve',
                      icon: 'pi pi-fw pi-calendar-times',
                  }
              ]
          }
      ];

      this.items2 = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
        }
    ];
  }

  evento(){
    this.serviceLogin.nome = ''
  }
}
