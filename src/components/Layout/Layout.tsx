import * as React from 'react';

import NavBar from '../NavBar';

import './Layout.scss';

const FONT_RATIO_TO_HEIGHT = 7;
interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutState {
  fontSize: string;
}

class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  private boxRef = React.createRef<HTMLDivElement>();

  public constructor(props: LayoutProps) {
    super(props);
    this.state = {
      fontSize: '14px'
    };
  }

  public componentDidMount() {
    this.calculateFont();
    window.addEventListener('resize', this.calculateFont);
  }

  public componentWillUnmount(): void {
    window.removeEventListener<'resize'>('resize', this.calculateFont);
  }

  private calculateFont = (): void => {
    const size: string = `${Math.round(
      this.boxRef.current.clientHeight / FONT_RATIO_TO_HEIGHT
    )}px`;

    this.setState({
      fontSize: size
    });
  };

  public render() {
    const { fontSize } = this.state;
    const { children } = this.props;

    return (
      <div ref={this.boxRef} className="layout" style={{ fontSize }}>
        <div className="layout__main">{children}</div>
        <div className="layout__bottom">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Layout;
