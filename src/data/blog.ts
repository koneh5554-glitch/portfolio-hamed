import type { BlogPost } from '../types';

export const showBlogSection = true; // Basculer sur false pour masquer complètement la rubrique

export const blogPostsData: BlogPost[] = [
  {
    id: 'telemetrie-iot-sim808-thingsboard',
    title: {
      fr: 'Télémétrie IoT : Interfacer une balise GPS SIM808 avec ThingsBoard en pratique',
      en: 'IoT Telemetry: Interfacing a SIM808 GPS Tracker with ThingsBoard in Practice',
    },
    summary: {
      fr: 'Retour d\'expérience technique sur la gestion des commandes AT, l\'alimentation découplée pour absorber les pics 2A du module GSM et le décodage des trames NMEA.',
      en: 'Technical walkthrough on managing AT commands, power decoupling for 2A GSM burst spikes, and streaming NMEA sentences to ThingsBoard.',
    },
    date: 'Novembre 2026',
    category: {
      fr: 'IoT & Systèmes Connectés',
      en: 'IoT & Connected Systems',
    },
    readTime: '4 min',
    tags: ['IoT', 'Arduino', 'SIM808', 'ThingsBoard', 'GSM'],
    content: {
      fr: `Dans les projets de géolocalisation de véhicules, le module SIM808 est un composant polyvalent combinant récepteur GPS et modem GSM/GPRS.

Cependant, son intégration sur le terrain réserve plusieurs pièges classiques :

1. La gestion critique de l'alimentation :
Le module SIM808 peut générer des appels de courant jusqu'à 2A pendant les sursauts d'émission GSM. Alimenter le module directement via le pin 5V d'une carte Arduino provoque inévitablement des chutes de tension et des redémarrages intempestifs du microcontrôleur. La solution réside dans l'utilisation d'un convertisseur abaisseur (Step-Down LM2596) dédié capable de délivrer 4.0V - 4.2V continus avec un condensateur de découplage électrolytique de 1000 µF à faible ESR placé au plus près des broches VCC du module.

2. L'acquisition et le filtrage des trames NMEA :
Les trames $GPRMC contiennent l'heure UTC, la latitude, la longitude, la vitesse sol et le cap. Plutôt que de surcharger la boucle d'exécution principale (loop), l'utilisation d'un buffer série circulaire et d'un parseur léger évite les blocages et garantit un flux régulier de données vers ThingsBoard.

3. La transmission vers ThingsBoard :
Via le protocole HTTP ou MQTT, les coordonnées sont injectées sous forme de clés de télémétrie JSON ({ "latitude": xx.xxxx, "longitude": yy.yyyy, "speed": zz }). Le widget cartographique open-source de ThingsBoard permet alors un traçage en direct sans nécessiter de serveur cartographique lourd.`,
      en: `In vehicle tracking projects, the SIM808 module is a powerful all-in-one chip merging satellite GPS reception with 2G GSM/GPRS cellular connectivity.

However, field engineering poses several crucial challenges:

1. Power supply decoupling:
During transmission bursts, the cellular power amplifier pulls up to 2A pulses. Attempting to power the SIM808 directly from an Arduino's 5V pin causes severe voltage dips and brownout resets. The reliable solution uses a dedicated buck converter (LM2596) delivering 4.0V - 4.2V with a 1000 µF low-ESR buffer capacitor placed right at the module pins.

2. Sentence parsing:
The $GPRMC sentence delivers UTC time, latitude, longitude, and ground speed. Using lightweight non-blocking circular buffers ensures serial frames are parsed without hanging the main execution loop.

3. ThingsBoard ingestion:
Telemetry is formatted as simple JSON payloads and pushed via lightweight HTTP POST or MQTT messages to ThingsBoard for real-time fleet visualization.`,
    },
  },
  {
    id: 'gpio-interruptions-raspberry-pi',
    title: {
      fr: 'Maîtriser les interruptions matérielles sur Raspberry Pi avec Python',
      en: 'Mastering Hardware Interrupts on Raspberry Pi with Python',
    },
    summary: {
      fr: 'Pourquoi et comment abandonner le polling actif au profit des callbacks événementiels pour optimiser les performances de vos projets embarqués.',
      en: 'Why and how to replace active busy-waiting loops with event-driven callback routines in embedded Linux.',
    },
    date: 'Octobre 2026',
    category: {
      fr: 'Systèmes Embarqués',
      en: 'Embedded Systems',
    },
    readTime: '3 min',
    tags: ['Raspberry Pi', 'Python', 'GPIO', 'Linux'],
    content: {
      fr: `Lorsqu'on débute la programmation de boutons ou de capteurs d'impulsion sur Raspberry Pi, le premier réflexe est souvent d'écrire une boucle infinie 'while True' scrutant l'état de la broche GPIO avec un court sleep.

Cette méthode de scrutage actif (polling) présente deux défauts majeurs :
1. Une surconsommation CPU inutile : Le processeur tourne constamment à plein régime pour vérifier une broche dont l'état ne change que ponctuellement.
2. Le risque de rater des impulsions brèves ou d'introduire des latences perceptibles.

L'approche professionnelle consiste à déléguer cette surveillance au noyau Linux via la détection de fronts (edge detection) :

\`\`\`python
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_UP)

# Détection sur front descendant avec anti-rebond matériel/logiciel
def on_button_pressed(channel):
    print("Événement détecté sur la broche", channel)

GPIO.add_event_detect(17, GPIO.FALLING, callback=on_button_pressed, bouncetime=200)
\`\`\`

Avec cette approche, le script Python s'endort sans consommer de ressources, et le système d'exploitation réveille immédiatement la fonction callback dès qu'une transition électrique survient. Le paramètre bouncetime filtre de plus les micro-rebonds mécaniques parasites.`,
      en: `When beginners read physical buttons or pulse sensors on a Raspberry Pi, they typically write a 'while True' busy loop checking GPIO.input() with a short sleep.

This polling approach suffers from two severe flaws:
1. High CPU waste: The processor constantly burns cycles checking an idle pin.
2. Latency and dropped pulses: Fast physical signals may slip between polling intervals.

The professional engineering approach registers hardware edge detection callbacks handled directly by the Linux kernel:

\`\`\`python
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_UP)

def on_button_pressed(channel):
    print("Triggered on GPIO", channel)

GPIO.add_event_detect(17, GPIO.FALLING, callback=on_button_pressed, bouncetime=200)
\`\`\`

This ensures 0% idle CPU usage while delivering sub-millisecond event responsiveness and automated switch debouncing.`,
    },
  },
];
