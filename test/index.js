import { IntlProvider, FormattedNumber, FormattedPlural } from '../';
import { h, Component, render, options } from 'preact';

/** @jsx h */

// disable async rendering entirely to make tests simpler
options.syncComponentUpdates = true;


describe('preact-intl', () => {
	let scratch = document.createElement('div');
	before( () => document.body.appendChild(scratch) );
	beforeEach( () => scratch.innerHTML = '' );
	after( () => document.body.removeChild(scratch) );

	it('should provide basic exports', () => {
		expect(IntlProvider).to.be.a('function');
		expect(FormattedNumber).to.be.a('function');
		expect(FormattedPlural).to.be.a('function');
	});

	describe('Hello World example', () => {
		class App extends Component {
			state = {
				name: 'Eric',
				unreadCount: 1000
			};

			render(_, { name, unreadCount }) {
				return (
					<p>
						Hello <b>{name}</b>, you have{' '}
						<FormattedNumber value={unreadCount} />{' '}
						<FormattedPlural value={unreadCount} one="message" other="messages" />.
					</p>
				);
			}
		}

		it('should render to DOM', () => {
			render((
				<IntlProvider locale="en">
					<App />
				</IntlProvider>
			), scratch);

			expect(scratch.innerHTML).to.equal(`<p>Hello <b>Eric</b>, you have <span>1,000</span> <span>messages</span>.</p>`);
		});

		it('should render to string', () => {
			expect(
				<IntlProvider locale="en">
					<App />
				</IntlProvider>
			).to.eql(
				<p>Hello <b>Eric</b>, you have <span>1,000</span> <span>messages</span>.</p>
			);
		});
	});
});
