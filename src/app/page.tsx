import CardButton from "@/components/buttonCard";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="min-h-full max-lg: w-2/3">
      <Typography variant="h3">Olá!</Typography>
      <Typography variant="body1">Conte-nos mais sobre você. Na aba Habilidades, compartilhe suas experiências profissionais e as competências que adquiriu ao longo da sua carreira. Na página Hobbies, fale sobre o que você gosta de fazer para relaxar e se divertir. E, por fim, utilize a aba Contatos para nos informar como podemos entrar em contato com você.</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <CardButton
          image="/static/habilidadeInicio.png"
          title="Habilidades"
          route="/"
        /><CardButton
          image="/static/hobbiesInicio.png"
          title="Hobbies"
          route="/"
        /><CardButton
          image="/static/contatoInicio.png"
          title="Contato"
          route="/"
        /></div>
    </div>
  );
}
