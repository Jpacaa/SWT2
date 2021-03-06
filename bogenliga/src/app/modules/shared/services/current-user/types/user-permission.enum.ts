export enum UserPermission {
  /**
   * has no rights but may read unrestricted data
   */
  CAN_READ_DEFAULT,

  /*
   * Permissions to work with:
   * DSB_Mitglied
   * Verein
   * Region
   * Liga
   */
  CAN_READ_STAMMDATEN,
  CAN_MODIFY_STAMMDATEN,
  CAN_DELETE_STAMMDATEN,

  /**
   * Permissions to work with:
   * Benutzer
   * Rolle
   * Recht
   * Configuration
   */
  CAN_READ_SYSTEMDATEN,
  CAN_MODIFY_SYSTEMDATEN,
  CAN_DELETE_SYSTEMDATEN,


   /*
   * Permissions to work with:
   * Ligatabelle
   * Match
   * Passe
   * Kampfrichter
   */
  CAN_READ_WETTKAMPF,
  CAN_MODIFY_WETTKAMPF,




  // für die Pflege der Daten des eigenen Vereins
  CAN_READ_MY_VEREIN,
  CAN_MODIFY_MY_VEREIN,



  // für Ligaleiter zur Modifikation der eigenen Events
  CAN_READ_MY_VERANSTALTUNG,
  CAN_MODIFY_MY_VERANSTALTUNG,



  // für Ausrichter zur Modifikation der eigenen Events
  CAN_READ_MY_ORT,
  CAN_MODIFY_MY_ORT,

  /*
   * Permissions to work with:
   * Veranstaltung
   * Wettkampftyp
   * Ligatabelle
   * Klasse
   * Disziplin
   */
  CAN_READ_SPORTJAHR,
  CAN_MODIFY_SPORTJAHR,


  // für die technische User der Tablets
  CAN_OPERATE_SPOTTING


}
