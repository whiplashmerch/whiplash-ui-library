import { expect } from 'chai';
import Theme from './Theme';


describe('Theme', () => {

  it('should be a healthy Obj', () => {
    expect(Theme).to.not.equal(null);
    expect(Theme).to.not.equal(undefined);
  });

  // COLORS

  it('should have a primaryLight prop', () => {
    expect(Theme.primaryLight).to.not.equal(null);
    expect(Theme.primaryLight).to.not.equal(undefined);
    expect(Theme.primaryLight).to.not.equal('');
    expect(Theme.primaryLight).to.equal('#8071FE');
  });

  it('should have a primary prop', () => {
    expect(Theme.primary).to.not.equal(null);
    expect(Theme.primary).to.not.equal(undefined);
    expect(Theme.primary).to.not.equal('');
    expect(Theme.primary).to.equal('#5134C4');
  });

  it('should have a primaryDark prop', () => {
    expect(Theme.primaryDark).to.not.equal(null);
    expect(Theme.primaryDark).to.not.equal(undefined);
    expect(Theme.primaryDark).to.not.equal('');
    expect(Theme.primaryDark).to.equal('#4800B6');
  });

  it('should have a secondary prop', () => {
    expect(Theme.secondary).to.not.equal(null);
    expect(Theme.secondary).to.not.equal(undefined);
    expect(Theme.secondary).to.not.equal('');
    expect(Theme.secondary).to.equal('#EE2C8D');
  });

  it('should have a accent prop', () => {
    expect(Theme.accent).to.not.equal(null);
    expect(Theme.accent).to.not.equal(undefined);
    expect(Theme.accent).to.not.equal('');
    expect(Theme.accent).to.equal('#00E7AE');
  });

  it('should have a success prop', () => {
    expect(Theme.success).to.not.equal(null);
    expect(Theme.success).to.not.equal(undefined);
    expect(Theme.success).to.not.equal('');
    expect(Theme.success).to.equal('#4CAF50');
  });

  it('should have a warning prop', () => {
    expect(Theme.warning).to.not.equal(null);
    expect(Theme.warning).to.not.equal(undefined);
    expect(Theme.warning).to.not.equal('');
    expect(Theme.warning).to.equal('#FFEB3B');
  });

  it('should have a danger prop', () => {
    expect(Theme.danger).to.not.equal(null);
    expect(Theme.danger).to.not.equal(undefined);
    expect(Theme.danger).to.not.equal('');
    expect(Theme.danger).to.equal('#CC3E4A');
  });

  it('should have a pending prop', () => {
    expect(Theme.pending).to.not.equal(null);
    expect(Theme.pending).to.not.equal(undefined);
    expect(Theme.pending).to.not.equal('');
    expect(Theme.pending).to.equal('#9677DF');
  });

  it('should have a darkText prop', () => {
    expect(Theme.darkText).to.not.equal(null);
    expect(Theme.darkText).to.not.equal(undefined);
    expect(Theme.darkText).to.not.equal('');
    expect(Theme.darkText).to.equal('#303030');
  });

  it('should have a whiteText prop', () => {
    expect(Theme.whiteText).to.not.equal(null);
    expect(Theme.whiteText).to.not.equal(undefined);
    expect(Theme.whiteText).to.not.equal('');
    expect(Theme.whiteText).to.equal('#fff');
  });

  it('should have a buttonText prop', () => {
    expect(Theme.buttonText).to.not.equal(null);
    expect(Theme.buttonText).to.not.equal(undefined);
    expect(Theme.buttonText).to.not.equal('');
    expect(Theme.buttonText).to.equal('#F9F9FA');
  });

  it('should have a placeholder prop', () => {
    expect(Theme.placeholder).to.not.equal(null);
    expect(Theme.placeholder).to.not.equal(undefined);
    expect(Theme.placeholder).to.not.equal('');
    expect(Theme.placeholder).to.equal('#808091');
  });

  it('should have a darkWhite prop', () => {
    expect(Theme.darkWhite).to.not.equal(null);
    expect(Theme.darkWhite).to.not.equal(undefined);
    expect(Theme.darkWhite).to.not.equal('');
    expect(Theme.darkWhite).to.equal('#FDFDFD');
  });

  it('should have a black prop', () => {
    expect(Theme.black).to.not.equal(null);
    expect(Theme.black).to.not.equal(undefined);
    expect(Theme.black).to.not.equal('');
    expect(Theme.black).to.equal('#000');
  });

  it('should have a border prop', () => {
    expect(Theme.border).to.not.equal(null);
    expect(Theme.border).to.not.equal(undefined);
    expect(Theme.border).to.not.equal('');
    expect(Theme.border).to.equal('#EDEDF3');
  });

  // FONTS

  it('should have a headlineFont prop', () => {
    expect(Theme.headlineFont).to.not.equal(null);
    expect(Theme.headlineFont).to.not.equal(undefined);
    expect(Theme.headlineFont).to.not.equal('');
    expect(Theme.headlineFont).to.equal('"Aller-Light", Helvetica, Arial, sans-serif');
  });

  it('should have a copyFont prop', () => {
    expect(Theme.copyFont).to.not.equal(null);
    expect(Theme.copyFont).to.not.equal(undefined);
    expect(Theme.copyFont).to.not.equal('');
    expect(Theme.copyFont).to.equal('"Lato", Helvetica, Arial, sans-serif');
  });

  it('should have a fontFamily prop', () => {
    expect(Theme.fontFamily).to.not.equal(null);
    expect(Theme.fontFamily).to.not.equal(undefined);
    expect(Theme.fontFamily).to.not.equal('');
    expect(Theme.fontFamily).to.equal('-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif');
  });

  // SHARED COLORS

  it('should have a white prop', () => {
    expect(Theme.white).to.not.equal(null);
    expect(Theme.white).to.not.equal(undefined);
    expect(Theme.white).to.not.equal('');
    expect(Theme.white).to.equal('#fff');
  });

  it('should have a linkColor prop', () => {
    expect(Theme.linkColor).to.not.equal(null);
    expect(Theme.linkColor).to.not.equal(undefined);
    expect(Theme.linkColor).to.not.equal('');
    expect(Theme.linkColor).to.equal('#5134C4');
  });

});
