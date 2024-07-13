import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExampleText = () => (
  <div className="flex items-center justify-center h-screen">
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  </div>
);

export default LoaderExampleText;
