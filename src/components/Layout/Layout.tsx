import * as React from "react";

import NavBar from "../NavBar";

import "./Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutState {
  fontSize: string;
}

class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  private boxRef = React.createRef<HTMLDivElement>();
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      fontSize: "14px"
    };
  }

  componentDidMount() {
    this.calculateFont();
    window.addEventListener("resize", this.calculateFont);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateFont);
  }

  calculateFont = (): void => {
    let size: string = "";
    if (window.innerWidth === this.boxRef.current.clientWidth) {
      size = `${Math.round(this.boxRef.current.clientWidth / 11)}px`;
    } else {
      size = `${Math.round(this.boxRef.current.clientHeight / 7)}px`;
    }

    this.setState({
      fontSize: size
    });
  };

  render() {
    const { fontSize } = this.state;
    const { children } = this.props;

    return (
      <div ref={this.boxRef} className="box" style={{ fontSize: fontSize }}>
        <div className="layout">
          <div className="layout__main">{this.props.children}</div>
          <div className="layout__bottom">
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
