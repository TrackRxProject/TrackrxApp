//
//  Copyright (c) 2014 Texas Instruments. All rights reserved.
//

package com.smartconfig.utils;

import org.json.JSONObject;

public interface MDnsCallbackInterface {
	void onDeviceResolved(JSONObject deviceJSON);
}
