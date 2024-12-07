import { loadPage } from '$lib/utils';

export default function Card() {
    return (
        <div>
            <p>Card</p>
            <button type="button" onClick={loadPage}>
                click me
            </button>
        </div>
    );
}
