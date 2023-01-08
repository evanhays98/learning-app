import React from 'react';
import {createUseStyles} from 'react-jss';
import {theme, Theme} from "../Theme/Theme";
// @ts-ignore
import cardWork from '../assets/cardWork.png';
// @ts-ignore
import cardUpdate from '../assets/cardUpdate.png';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.deepBrown,
        color: theme.colors.silverLining,
        padding: [theme.marginBase * 6, theme.marginBase * 3],
    },
    flashScreen: {
        ...theme.fonts.h1,
        color: theme.colors.brightYellow,
        marginBottom: theme.marginBase * 6,
    },
    text: {
        ...theme.fonts.body,
        textAlign: 'justify',
    },
    image: {
        width: '90%',
        height: 'auto',
    },
}));

export const Introduction = () => {
    const classes = useStyles({theme});

    return (
        <div className={classes.page}>
            <div className={classes.flashScreen}>FlashScreen</div>
            <div className={classes.text}>
                Notre site est conçu pour vous aider à apprendre de manière efficace et interactive. Nous proposons des
                questions sous forme de petits blocs. Si votre réponse est incorrecte, la question vous sera posée à
                nouveau afin de vous aider à mieux la retenir.
            </div>
            <img src={cardWork} alt="flash card" className={classes.image}/>
            <div className={classes.text}>
                Vous pouvez également créer vos propres chapitres et définir le contenu des questions qui y sont posées.
                L'objectif est de vous aider à apprendre par répétition en répondant à chaque question cinq fois. Si
                vous pensez avoir bien assimilé une question, vous pouvez indiquer que vous ne souhaitez plus la voir
                posée à nouveau.
            </div>
            <img src={cardUpdate} alt="flash update" className={classes.image}/>
            <div className={classes.text}>
                En utilisant notre site, vous pouvez améliorer vos connaissances et votre compréhension de sujets divers
                et variés de manière ludique et interactive. Nous sommes convaincus que notre application peut être
                lucrative pour vous en vous permettant d'apprendre de manière efficace et de mettre vos connaissances en
                pratique dans votre vie quotidienne. N'hésitez pas à essayer notre site pour vous en rendre compte par
                vous-même !
            </div>
        </div>
    );
};
