import React from 'react';
import { connect } from 'react-redux';

import styles from './Waveform.module.css';

interface Props {
  nothingYet?: string;
}

class Waveform extends React.Component<Props> {
  nothingYet: string;
  
  constructor(props: Props) {
    super(props);

    this.nothingYet = props.nothingYet ?? 'nothing';
  }

  render() {
    // const { somethingYouNeedFromProps } = this.props;

    return (
      <header className={styles.header}>
        <div className={styles.header__mainControls}>
          one
        </div>
        <div className={styles.header__playingBar}>
          two
        </div>
        <div className={styles.header__search}>
          three
        </div>
      </header>
    );
  }
}

// When you need state look at
// const mapStateToProps = ({ player }: RootState) => ({
// export default connect(mapStateToProps)(Header);
export default Waveform;