Aluno: José Victor Marin Consolaro
Sala: TI40
Professor: Conrado Saud

# Meu site Vercel DOG API: https://dog-mc6zzlkyd-jose-consolaros-projects.vercel.app/dogs

# Tutorial para inicialização do site DOG Api:

1. Inicialmente, você deve acessar [GitHub](https://github.com) e fazer login com sua conta.

2. Uma vez logado no GitHub você deve ir em: **Novo** no canto superior direito.

3. Preencha os detalhes do seu novo repositório de acordo com sua necessidade.

4. Clique em **Criar Repositório** para finalizar a criação do repositório.

5. Com o Repositório criado você deve realizar o primeito **Commit** para subir para o **GitHub** as alterações feitas do projeto.

6. Com as alterações no ar você deve acessar o site do [Vercel](https://vercel.com) e acessar sua conta.

7. Uma vez logado na sua conta você deve ir em **Add new Project** para adicionar um novo projeto.

8. É extremamente importante que você vincule sua conta do **GitHub** com o Vercel. Isso porque todas as alterações realizadas no Projeto e enviadas ao GitHub serão enviadas também para o Vercel uma vez que o Projeto estiver no ar.

9. Uma vez que sua conta do **GitHub** estiver vinculado com o **Vercel**, você deve importar o repositório criado do projeto para poder realizar seu primeiro **Deploy**

10. Após realizar seu primeiro **Deploy** do Projeto em questão, seu site estara no ar e funcional.



# Tutorial de envio de arquivos NextUS para o GitHub Pages

1. Inicialmente, você deve acessar [GitHub](https://github.com) e fazer login com sua conta.

2. Uma vez logado no GitHub você deve ir em: **Novo** no canto superior direito.

3. Preencha os detalhes do seu novo repositório de acordo com sua necessidade.

4. Clique em **Criar Repositório** para finalizar a criação do repositório.

5. Com seu repositório criado você deve desenvolver seu projeto **NextUS / React**.

6. Agora você deve realizar alterações no seu projeto. Inicialmente, você deve acessar o arquivo **next.config.js** e seu arquivo deverá ficar da seguinte forma:

```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        output: 'export',
        images: {
            unoptimized: true,
        },
    };

    export default nextConfig;
```

7. Uma vez que o arquivo foi atualizado e alterado você deve abrir o **Terminal** e rodar o seguinte comando: **npx next build**, isso irá gerar os arquivos estáticos que serão enviados para o **GitHub Pages** posteriormente.

8. Após você ter digitado o comando acima irá ser criado uma pasta chamada **out**, dentro dela você irá encontrar os arquivos estáticos.

9. Agora com **TODOS** os arquivos estáticos gerados você deve criar um novo repositório no **GitHub**. Esse repositório deve ser **Publico** e ter o nome do seu usuário para que o site criado tenha seu nome, por exemplo: **https://usuario.github.io**.

10. Após a criação do repositório você deve realizar seu **Primeiro Commit dos arquivos estáticos gerados na pasta out**. Dessa forma, os arquivos estáticos irão ser publicados nesse repositório.

11. Aguarde 3 minutos e procure pelo endereço: **https://usuario.github.io**. Você irá encontrar sua página GitHub Pages.


