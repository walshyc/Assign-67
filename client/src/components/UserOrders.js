import React from 'react';

const UserOrders = (props) => {
  console.log(props.orders);
  if (props.orders.length < 1) {
    return (
      <div>
        {props.user.fname} {props.user.lname} has no orders yet!
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-300 flex items-start justify-start w-full pt-8">
        <div className="w-full rounded bg-white dark:bg-gray-800 shadow">
          <div className="w-full h-10 bg-green-300 rounded-t">
            <div className="flex flex-col justify-center items-start h-full w-full">
              <p className="w-full pl-4 text-xl font-bold">Orders</p>
            </div>
          </div>
          <div className="w-full border-t border-gray-400 bg-green-100 rounded-b h-full">
            <div className="flex flex-col justify-between flex-wrap">
              <div className="flex flex-col justify-center md:flex-row flex-wrap">
                {props.orders.map((o, i) => {
                  return (
                    <div className="w-10/12 md:w-1/4 bg-green-300 rounded-xl shadow-xl m-2">
                      <div key={o._id} className="ml-4">
                        <div className="">
                          Order No: {o._id.slice(19).toUpperCase()}
                        </div>
                        <div className="flex font-bold">
                          <div className="w-3/4">Item</div>
                          <div className="w-1/4">Price</div>
                        </div>

                        {o.items.map((item, index) => (
                          <div key={index} className="flex">
                            <div className="w-3/4">
                              {item.phone.manufacturer} {item.phone.model}
                            </div>
                            <div className="w-1/4">€{item.phone.price}</div>
                          </div>
                        ))}
                        <div className="flex border-t border-gray-500">
                          <div className="w-3/4">Total:</div>
                          <div className="w-1/4">
                            €{o.items.reduce((t, it) => t + it.phone.price, 0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserOrders;
