//
//  Copyright (c) 2014 Texas Instruments. All rights reserved.
//

package com.smartconfig.utils;

import android.content.Context;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.googlecode.androidannotations.annotations.ViewById;


public class DeviceItemView extends RelativeLayout {

	@ViewById
	ImageView devices_list_item_image;
	
	@ViewById
	TextView devices_list_item_name;
	
	public DeviceItemView(Context context) {
		super(context);
	}
	
	public void bind(Device device) {
		devices_list_item_name.setText(device.name);
	}
}
