# FeatureMap

Este projeto é uma aplicação de visualização de dados em 2D usando React e a biblioteca Three.js. A aplicação permite visualizar pontos e conexões de dados um espaço físico. tridimensional.

### Descrição das Pastas e Arquivos

- **documentation/contracts/**: Contém arquivos JSON que descrevem os contratos de dados usados na aplicação.
  - `GetPointsAndConnections.json`: Esquema JSON para os pontos e conexões.
  - `GetPointsAndConnectionsExample.json`: Exemplo de dados JSON para pontos e conexões.

- **src/components/**: Contém os componentes React usados na aplicação.
  - **atoms/**: Componentes atômicos que representam elementos básicos da interface.
    - `Line.jsx`: Componente para renderizar linhas entre pontos.
    - `Point.jsx`: Componente para renderizar pontos no espaço 3D.
  - `Graph.jsx`: Componente principal que renderiza o gráfico 3D.
  - `Home.jsx`: Componente da página inicial.

- **src/models/**: Contém os modelos de dados usados na aplicação.
  - `ConnectionModel.jsx`: Modelo para representar conexões entre pontos.
  - `PointModel.jsx`: Modelo para representar pontos.

- **src/pages/**: Contém as páginas da aplicação.
  - `Home.jsx`: Página inicial da aplicação.

- **src/services/**: Contém os serviços que fornecem dados para a aplicação.
  - `pointService.jsx`: Serviço para obter pontos e conexões.

- **src/utils/**: Contém utilitários e funções auxiliares.
  - `colors.js`: Define arrays de cores usadas na aplicação.
  - `pointPosition.js`: Funções para gerar posições de pontos.
  - `threeHelpers.js`: Funções auxiliares para configurar a cena 3D com Three.js.


## Instalação

Para instalar as dependências do projeto, execute:

```sh
npm install