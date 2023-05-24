import { Injectable } from '@angular/core';
import {Platform} from "@ionic/angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Lugar } from 'src/app/lugar.model';
@Injectable({
  providedIn: 'root'
})
export class DbLugaersService {
  db_name: string = "lugares.db";
  db_table: string = "lugares";
  private dbInstance!: SQLiteObject;
  USERS!: Array<any>;

  constructor(private platform: Platform,
              private sqlite: SQLite) {

  }
  async databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({name: this.db_name, location: 'default'})
          .then((sqLite: SQLiteObject) => {
            this.dbInstance = sqLite;
            sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS lugares ( id INTEGER PRIMARY KEY AUTOINCREMENT, foto1 TEXT, foto2 TEXT, foto3 TEXT, genero TEXT, informacion1 TEXT, informacion2 TEXT, latitud REAL, longitud REAL, nombre TEXT )`, [] )
                .then((res) => { alert(JSON.stringify(res)); } )
                .catch((error) => alert(JSON.stringify(error)));
          })
          .catch((error) => alert(JSON.stringify(error)))});
  }
  getAllUsers(){

  }
}
