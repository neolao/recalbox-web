import React from "react";
import Translate from "react-translate-component";

/**
 * The general configuration
 */
export default class GeneralPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        let labelColumnClassName = "small-6 medium-4 large-2 columns";
        let fieldColumnClassName = "small-6 medium-6 large-4 columns end";


        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.general"/></h1>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="language" className="inline">
                            <Translate content="setting.language.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <select id="language">
                            <option value="en_US">English (US)</option>
                            <option value="en_GB">English (GB)</option>
                            <option value="fr_FR">Français</option>
                            <option value="de_DE">Deutsche</option>
                            <option value="pt_BR">Português</option>
                            <option value="es_ES">Español</option>
                        </select>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="keyboard" className="inline">
                            <Translate content="setting.keyboardlayout.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <select id="keyboard">
                            <option value="us">English (US)</option>
                            <option value="en">English (UK)</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsche</option>
                            <option value="es">Español</option>
                        </select>
                    </div>
                </div>

                <div className="clearfix">
                    <div className={labelColumnClassName}>
                        <label htmlFor="timezone" className="inline">
                            <Translate content="setting.timezone.label"/>
                        </label>
                    </div>
                    <div className={fieldColumnClassName}>
                        <select id="timezone">
                            <option value="Pacific/Midway">Pacific/Midway</option>
                            <option value="Pacific/Samoa">Pacific/Samoa</option>
                            <option value="Pacific/Honolulu">Pacific/Honolulu</option>
                            <option value="US/Alaska">US/Alaska</option>
                            <option value="America/Los_Angeles">America/Los_Angeles</option>
                            <option value="America/Tijuana">America/Tijuana</option>
                            <option value="US/Arizona">US/Arizona</option>
                            <option value="America/Chihuahua">America/Chihuahua</option>
                            <option value="America/Chihuahua">America/Chihuahua</option>
                            <option value="America/Mazatlan">America/Mazatlan</option>
                            <option value="US/Mountain">US/Mountain</option>
                            <option value="America/Managua">America/Managua</option>
                            <option value="US/Central">US/Central</option>
                            <option value="America/Mexico_City">America/Mexico_City</option>
                            <option value="America/Mexico_City">America/Mexico_City</option>
                            <option value="America/Monterrey">America/Monterrey</option>
                            <option value="Canada/Saskatchewan">Canada/Saskatchewan</option>
                            <option value="America/Bogota">America/Bogota</option>
                            <option value="US/Eastern">US/Eastern</option>
                            <option value="US/East-Indiana">US/East-Indiana</option>
                            <option value="America/Lima">America/Lima</option>
                            <option value="America/Bogota">America/Bogota</option>
                            <option value="Canada/Atlantic">Canada/Atlantic</option>
                            <option value="America/Caracas">America/Caracas</option>
                            <option value="America/La_Paz">America/La_Paz</option>
                            <option value="America/Santiago">America/Santiago</option>
                            <option value="Canada/Newfoundland">Canada/Newfoundland</option>
                            <option value="America/Sao_Paulo">America/Sao_Paulo</option>
                            <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
                            <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
                            <option value="America/Godthab">America/Godthab</option>
                            <option value="America/Noronha">America/Noronha</option>
                            <option value="Atlantic/Azores">Atlantic/Azores</option>
                            <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
                            <option value="Africa/Casablanca">Africa/Casablanca</option>
                            <option value="Europe/London">Europe/London</option>
                            <option value="Etc/Greenwich">Etc/Greenwich</option>
                            <option value="Europe/Lisbon">Europe/Lisbon</option>
                            <option value="Europe/London">Europe/London</option>
                            <option value="Africa/Monrovia">Africa/Monrovia</option>
                            <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                            <option value="Europe/Belgrade">Europe/Belgrade</option>
                            <option value="Europe/Berlin">Europe/Berlin</option>
                            <option value="Europe/Berlin">Europe/Berlin</option>
                            <option value="Europe/Bratislava">Europe/Bratislava</option>
                            <option value="Europe/Brussels">Europe/Brussels</option>
                            <option value="Europe/Budapest">Europe/Budapest</option>
                            <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                            <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                            <option value="Europe/Madrid">Europe/Madrid</option>
                            <option value="Europe/Paris">Europe/Paris</option>
                            <option value="Europe/Prague">Europe/Prague</option>
                            <option value="Europe/Rome">Europe/Rome</option>
                            <option value="Europe/Sarajevo">Europe/Sarajevo</option>
                            <option value="Europe/Skopje">Europe/Skopje</option>
                            <option value="Europe/Stockholm">Europe/Stockholm</option>
                            <option value="Europe/Vienna">Europe/Vienna</option>
                            <option value="Europe/Warsaw">Europe/Warsaw</option>
                            <option value="Africa/Lagos">Africa/Lagos</option>
                            <option value="Europe/Zagreb">Europe/Zagreb</option>
                            <option value="Europe/Athens">Europe/Athens</option>
                            <option value="Europe/Bucharest">Europe/Bucharest</option>
                            <option value="Africa/Cairo">Africa/Cairo</option>
                            <option value="Africa/Harare">Africa/Harare</option>
                            <option value="Europe/Helsinki">Europe/Helsinki</option>
                            <option value="Europe/Istanbul">Europe/Istanbul</option>
                            <option value="Asia/Jerusalem">Asia/Jerusalem</option>
                            <option value="Europe/Helsinki">Europe/Helsinki</option>
                            <option value="Africa/Johannesburg">Africa/Johannesburg</option>
                            <option value="Europe/Riga">Europe/Riga</option>
                            <option value="Europe/Sofia">Europe/Sofia</option>
                            <option value="Europe/Tallinn">Europe/Tallinn</option>
                            <option value="Europe/Vilnius">Europe/Vilnius</option>
                            <option value="Asia/Baghdad">Asia/Baghdad</option>
                            <option value="Asia/Kuwait">Asia/Kuwait</option>
                            <option value="Europe/Minsk">Europe/Minsk</option>
                            <option value="Africa/Nairobi">Africa/Nairobi</option>
                            <option value="Asia/Riyadh">Asia/Riyadh</option>
                            <option value="Europe/Volgograd">Europe/Volgograd</option>
                            <option value="Asia/Tehran">Asia/Tehran</option>
                            <option value="Asia/Muscat">Asia/Muscat</option>
                            <option value="Asia/Baku">Asia/Baku</option>
                            <option value="Europe/Moscow">Europe/Moscow</option>
                            <option value="Asia/Muscat">Asia/Muscat</option>
                            <option value="Europe/Moscow">Europe/Moscow</option>
                            <option value="Asia/Tbilisi">Asia/Tbilisi</option>
                            <option value="Asia/Yerevan">Asia/Yerevan</option>
                            <option value="Asia/Kabul">Asia/Kabul</option>
                            <option value="Asia/Karachi">Asia/Karachi</option>
                            <option value="Asia/Karachi">Asia/Karachi</option>
                            <option value="Asia/Tashkent">Asia/Tashkent</option>
                            <option value="Asia/Calcutta">Asia/Calcutta</option>
                            <option value="Asia/Kolkata">Asia/Kolkata</option>
                            <option value="Asia/Calcutta">Asia/Calcutta</option>
                            <option value="Asia/Calcutta">Asia/Calcutta</option>
                            <option value="Asia/Calcutta">Asia/Calcutta</option>
                            <option value="Asia/Katmandu">Asia/Katmandu</option>
                            <option value="Asia/Almaty">Asia/Almaty</option>
                            <option value="Asia/Dhaka">Asia/Dhaka</option>
                            <option value="Asia/Dhaka">Asia/Dhaka</option>
                            <option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option>
                            <option value="Asia/Rangoon">Asia/Rangoon</option>
                            <option value="Asia/Bangkok">Asia/Bangkok</option>
                            <option value="Asia/Bangkok">Asia/Bangkok</option>
                            <option value="Asia/Jakarta">Asia/Jakarta</option>
                            <option value="Asia/Novosibirsk">Asia/Novosibirsk</option>
                            <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                            <option value="Asia/Chongqing">Asia/Chongqing</option>
                            <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                            <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
                            <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
                            <option value="Australia/Perth">Australia/Perth</option>
                            <option value="Asia/Singapore">Asia/Singapore</option>
                            <option value="Asia/Taipei">Asia/Taipei</option>
                            <option value="Asia/Ulan_Bator">Asia/Ulan_Bator</option>
                            <option value="Asia/Urumqi">Asia/Urumqi</option>
                            <option value="Asia/Irkutsk">Asia/Irkutsk</option>
                            <option value="Asia/Tokyo">Asia/Tokyo</option>
                            <option value="Asia/Tokyo">Asia/Tokyo</option>
                            <option value="Asia/Seoul">Asia/Seoul</option>
                            <option value="Asia/Tokyo">Asia/Tokyo</option>
                            <option value="Australia/Adelaide">Australia/Adelaide</option>
                            <option value="Australia/Darwin">Australia/Darwin</option>
                            <option value="Australia/Brisbane">Australia/Brisbane</option>
                            <option value="Australia/Canberra">Australia/Canberra</option>
                            <option value="Pacific/Guam">Pacific/Guam</option>
                            <option value="Australia/Hobart">Australia/Hobart</option>
                            <option value="Australia/Melbourne">Australia/Melbourne</option>
                            <option value="Pacific/Port_Moresby">Pacific/Port_Moresby</option>
                            <option value="Australia/Sydney">Australia/Sydney</option>
                            <option value="Asia/Yakutsk">Asia/Yakutsk</option>
                            <option value="Asia/Vladivostok">Asia/Vladivostok</option>
                            <option value="Pacific/Auckland">Pacific/Auckland</option>
                            <option value="Pacific/Fiji">Pacific/Fiji</option>
                            <option value="Pacific/Kwajalein">Pacific/Kwajalein</option>
                            <option value="Asia/Kamchatka">Asia/Kamchatka</option>
                            <option value="Asia/Magadan">Asia/Magadan</option>
                            <option value="Pacific/Fiji">Pacific/Fiji</option>
                            <option value="Asia/Magadan">Asia/Magadan</option>
                            <option value="Asia/Magadan">Asia/Magadan</option>
                            <option value="Pacific/Auckland">Pacific/Auckland</option>
                            <option value="Pacific/Tongatapu">Pacific/Tongatapu</option>
                        </select>
                    </div>
                </div>

            </article>
        );
    }
}


