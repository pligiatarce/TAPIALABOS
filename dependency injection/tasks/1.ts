//laboratoio 5
///P. Ligia Tapia Arce
///resolucion
class EmailNotifier {
    messageNotifier: IMessageNotifier;

    constructor() {
        this.messageNotifier = new EmailNotifier();
    }
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

interface IMessageNotifier {
    sendEmail(message: string, receiver: string): void;
}

class EmailNotifierS implements IMessageNotifier {
    sendEmail(message: string, receiver: string) {
        console.log(`Sending email to ${receiver}: ${message}`);
    }
}

class SMSServices implements IMessageNotifier {
    sendEmail(message: string, receiver: string) {
        console.log(`Sending SMS to ${receiver}: ${message}`);
    }
}

class EmailNotifiers {
    messageNotifier: IMessageNotifier;

    constructor(messageNotifier: IMessageNotifier) {
        this.messageNotifier= messageNotifier;
    }

    sendMessage(message: string, receiver: string) {
        this.messageNotifier.sendEmail(message, receiver);
    }
}


//laboratoio 6
///P. Ligia Tapia Arce
///resolucion
class MusicStore {
    genderMusic: GenderMusic;

    constructor() {
        this.genderMusic = new MusicStore();
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.genderMusic.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}
interface GenderMusic {
    newAlbumRelease(email: string, artist: string, album: string): void;
}

class MusicStores implements GenderMusic {
    newAlbumRelease(email: string, artist: string, album: string) {
        console.log(`Sending email to ${email}: ${album}`);
    }
}