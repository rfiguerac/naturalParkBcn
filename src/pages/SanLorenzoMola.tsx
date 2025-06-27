

import { useLanguage } from "../context/LanContext"
import { santLlorencAmuntES } from "../dictionary/ES";
import { santLlorencAmuntCAT } from "../dictionary/CA";
import { Articulo } from "../components/Articulo";


export const SanLorenzoMola = () => {


  const {lang} = useLanguage();
  const {descripcion,image,titulo} = lang === 'es' ? santLlorencAmuntES : santLlorencAmuntCAT;

  return <Articulo image={image} title={titulo} description={descripcion} />

}
