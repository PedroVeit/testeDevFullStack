Teste tecnico de gerenciamento de usuarios: 
Lista de usuarios onde o sistema entende quem está logado e o que essa pessoa pode ou não fazer

Criacao de uma estrutura utilizando Laravel e React.
- Adicionei o campo level diretamente na tabela de usuários para que o identifique o nível de permissão de cada pessoa. Definindo um valor padrão para garantir que nenhum usuário seja criado sem um nível definido
- No componente Usuarios.jsx, criei condições que verificam o auth.user.level. O usuário só enxerga os botões de "editar" ou "excluir" se o seu nível de acesso permitir.
- Configurei o DatabaseSeeder para gerar de forma automatica perfis de admin, moderador e leitor.
- Configurei para buscar todos os usuários do banco e enviá-los como props para o React.

teste:
senha->12345678 p todos
nivel 1 adm: admin@email.com 
    visualiza todas as ações

nivel 2 mod: moderador@email.com 
    botão de "excluir" ocultado 

nivel 3 leitor: leitor@email.com 
    botões de "editar" e "excluir" estao ocultados

utilizei o auxilio de ia para me ajudar no projeto 