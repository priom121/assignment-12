
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';




import CheckoutForm from './CheckoutForm';
import useAuth from '../../../Hooks/useAuth';
const stripePromise = loadStripe(import.meta.env.VITE_API_STRIPE)

const CheckoutPage = () => {
    const { user } = useAuth()
    const biodataId = '223';
    const selfBiodataId = '456';
    const selfEmail = user?.email
    const name = user?.displayName

    return (
        <div>

           
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        biodataId={biodataId}
                        selfBiodataId={selfBiodataId}
                        selfEmail={selfEmail}
                        name={name}
                    />
                </Elements>
          
        </div>
    );
};

export default CheckoutPage;