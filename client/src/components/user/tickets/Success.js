import React, { useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TICKET, SET_PURCHASE } from '../../../utils/mutations';
import { GET_PURCHASE } from '../../../utils/queries';
// import  { Redirect } from 'react-router-dom'

const Success = () => {
  const [addTicket] = useMutation(ADD_TICKET);
  const [setPurchase] = useMutation(SET_PURCHASE);

  const { loading, error: queryError, data: queryData } = useQuery(GET_PURCHASE);

  useEffect(() => {
    if (queryData && queryData.currentPurchase) {
      try {
        addTicket({ 
          variables: {
            event: queryData.currentPurchase._id,
          },
        }).then(() => {
          setPurchase({
            variables: {
              currentPurchase: null,
            },
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(() => {
      window.location.assign('/UserHome');
    }, 3000);
  }, [queryData, addTicket, setPurchase]);

  if (loading) {
    return <h1>Loading Success...</h1>;
  }

  if (queryError) {
    console.log(queryError);
    return <h1>Error: {queryError.message}</h1>
   
  }

  return (
    <div>
      <h2>Thank you for your purchase.</h2>
      <h2>You may view your new ticket on the ticket page.</h2>
    </div>
  );
}

export default Success;