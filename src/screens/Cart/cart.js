// import React, { Component } from 'react';
// import { View, Button } from 'react-native';
// import stripe from 'tipsi-stripe';

// stripe.setOptions({
//   publishableKey: 'pk_test_51H25LQLfJasF3HjaVAf66YoAAZT3P3S9oFpRAm5ziGzXF6ruRvb8C92j2f72eGPcce9ag4y5X3pvSFbdpA8lpT6X001C3QvyZw',
// });

// export default class Payment extends Component {
//   requestPayment = () => {
//     return stripe
//       .paymentRequestWithCardForm()
//       .then(stripeTokenInfo => {
//         console.warn('Token created', { stripeTokenInfo });
//       })
//       .catch(error => {
//         console.warn('Payment failed', { error });
//       });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Make a payment"
//           onPress={this.requestPayment}
//           disabled={this.state.isPaymentPending}
//         />
//       </View>
//     );
//   }
// }

// const styles = {
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// };
