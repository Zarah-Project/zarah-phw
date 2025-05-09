import style from './ActivismSection.module.scss';
import Photo from "@/components/BaseElements/Photo";
import React from "react";
import ActivismCard from "@/components/Cards/ActivismCard/ActivismCard";

const ActivismSection = ({title}) => {
    return (
        <div className={style.Section}>
            <div className={`${style.TitleSection} ${style.SectionPiece}`}>
                <div className={style.TitleWrapper}/>
                <div className={style.Title}>
                    <h1>{title}</h1>
                </div>
                <div className={style.ImageWrapper}>
                    <Photo image={'activismGroup01.png'} minHeight={576}/>
                </div>
            </div>
            <div className={`${style.Description} ${style.SectionPiece}`}>
                Women labour activists chose different movements and platforms to pursue their goals – including
                political parties. Yet even within parties that officially proclaimed their commitment to
                women’s rights, women’s issues were often sidestepped, and women struggled to reach positions
                of power. This cluster puts at the forefront the efforts of activists to make party politics more
                accessible for women, elevate them within the party hierarchies, and use party press to shed light
                on the condition of women workers.
            </div>
            <div className={`${style.Cards} ${style.SectionPiece}`}>
                <div className={style.Card}>
                    <ActivismCard activism={{
                        image: 'activismStories01.png',
                        title: 'Women Workers and the Fight for Rights in Eastern Europe (1890-1940)',
                        shortDescription: 'The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, ' +
                            'became a pioneering platform for advocating Romani rights. The association, led by Mária ' +
                            'László, mobilized to address critical barriers affecting Romani communities’ access to ' +
                            'employment, public services, and equal opportunities in a political environment that ' +
                            'increasingly viewed Roma not as an ethnic minority but as a marginalized social group ' +
                            'to be integrated into the working class. At least initially, thanks to its commitment to ' +
                            'class-based solidarity, the state socialist regime supported MCKSZ.'
                    }}/>
                </div>
                <div className={style.Card}>
                    <ActivismCard activism={{
                        image: 'activismStories02.jpg',
                        title: 'Women Workers and the Fight for Rights in Eastern Europe (1890-1940)',
                        shortDescription: 'The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, ' +
                            'became a pioneering platform for advocating Romani rights. The association, led by Mária ' +
                            'László, mobilized to address critical barriers affecting Romani communities’ access to ' +
                            'employment, public services, and equal opportunities in a political environment that ' +
                            'increasingly viewed Roma not as an ethnic minority but as a marginalized social group ' +
                            'to be integrated into the working class. At least initially, thanks to its commitment to ' +
                            'class-based solidarity, the state socialist regime supported MCKSZ.'
                    }}/>
                </div>
                <div className={style.Card}>
                    <ActivismCard activism={{
                        image: 'activismStories04.jpg',
                        title: 'Women Workers and the Fight for Rights in Eastern Europe (1890-1940)',
                        shortDescription: 'The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, ' +
                            'became a pioneering platform for advocating Romani rights. The association, led by Mária ' +
                            'László, mobilized to address critical barriers affecting Romani communities’ access to ' +
                            'employment, public services, and equal opportunities in a political environment that ' +
                            'increasingly viewed Roma not as an ethnic minority but as a marginalized social group ' +
                            'to be integrated into the working class. At least initially, thanks to its commitment to ' +
                            'class-based solidarity, the state socialist regime supported MCKSZ.'
                    }}/>
                </div>
                <div className={style.Card}>
                    <ActivismCard activism={{
                        image: 'activismStories02.jpg',
                        title: 'Women Workers and the Fight for Rights in Eastern Europe (1890-1940)',
                        shortDescription: 'The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, ' +
                            'became a pioneering platform for advocating Romani rights. The association, led by Mária ' +
                            'László, mobilized to address critical barriers affecting Romani communities’ access to ' +
                            'employment, public services, and equal opportunities in a political environment that ' +
                            'increasingly viewed Roma not as an ethnic minority but as a marginalized social group ' +
                            'to be integrated into the working class. At least initially, thanks to its commitment to ' +
                            'class-based solidarity, the state socialist regime supported MCKSZ.'
                    }}/>
                </div>
                <div className={style.Card}>
                    <ActivismCard activism={{
                        image: 'activismStories04.jpg',
                        title: 'Women Workers and the Fight for Rights in Eastern Europe (1890-1940)',
                        shortDescription: 'The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, ' +
                            'became a pioneering platform for advocating Romani rights. The association, led by Mária ' +
                            'László, mobilized to address critical barriers affecting Romani communities’ access to ' +
                            'employment, public services, and equal opportunities in a political environment that ' +
                            'increasingly viewed Roma not as an ethnic minority but as a marginalized social group ' +
                            'to be integrated into the working class. At least initially, thanks to its commitment to ' +
                            'class-based solidarity, the state socialist regime supported MCKSZ.'
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default ActivismSection