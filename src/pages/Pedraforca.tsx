

import { Articulo } from '../components/Articulo'
import { useLanguage } from '../context/LanContext'
import { pedraforcaCAT } from '../dictionary/CA';
import { pedraforcaES } from '../dictionary/ES';

export const Pedraforca = () => {

  const {lang} = useLanguage();
  const {titulo, descripcion, image} = lang === 'es' ? pedraforcaES : pedraforcaCAT;
  return <Articulo image={image} title={titulo} description={descripcion} />
}
