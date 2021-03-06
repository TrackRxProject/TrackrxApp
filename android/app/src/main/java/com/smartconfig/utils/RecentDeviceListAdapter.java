//
//  Copyright (c) 2014 Texas Instruments. All rights reserved.
//

package com.smartconfig.utils;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import com.googlecode.androidannotations.annotations.AfterInject;
import com.googlecode.androidannotations.annotations.EBean;
import com.googlecode.androidannotations.annotations.RootContext;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.List;

@EBean
public class RecentDeviceListAdapter extends BaseAdapter {
	
	List<Device> recentDevices;

    /*
	@Pref
	SharedPreferencesInterface_ prefs;
    */

	@RootContext
	Context context;

	@AfterInject
	void initAdapter() {
		recentDevices = new ArrayList<Device>(); // initialize new list of devices
		try {
			JSONArray recentDevicesArray = new JSONArray(); // new JSONArray(prefs.recentDevicesArray().get()); // get the JSON array of devices from the shared preferences
			for (int i=0; i<recentDevicesArray.length(); i++) { // populate the list
				recentDevices.add(new Device(recentDevicesArray.getJSONObject(i).getString("name"), recentDevicesArray.getJSONObject(i).getString("host")));
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void notifyDataSetChanged() {
		super.notifyDataSetChanged();
		initAdapter();
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		DeviceItemView deviceItemView;
        /*
		if (convertView == null) {
			deviceItemView = DeviceItemView_.build(context);
		} else {
			deviceItemView = (DeviceItemView) convertView;
		}
		*/
        deviceItemView = (DeviceItemView) convertView;
		deviceItemView.bind(getItem(position));
		return deviceItemView;
	}
	
	@Override
	public int getCount() {
		return recentDevices.size();
	}

	@Override
	public Device getItem(int position) {
		return recentDevices.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

}
