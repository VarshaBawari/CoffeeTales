package com.coffee.countriesParsor;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;


public class CountriesParsorModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    private JSONObject countryCities = null;


    public CountriesParsorModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        try {
            this.countryCities = new JSONObject(loadJSONFromAssets());
        } catch (JSONException e) {
            countryCities = new JSONObject();
        }
    }

    public String loadJSONFromAssets() {
        String json = null;
        try {
            InputStream inputStream = reactContext.getAssets().open("countriesList.json");
            int size = inputStream.available();
            byte[] buffer = new byte[size];
            inputStream.read(buffer);
            inputStream.close();
            json = new String(buffer, "UTF-8");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return json;
    }


    @Override
    public String getName() {
        return "CountriesParsor";
    }

    @ReactMethod
    public void getCountries(Callback callback) {
        WritableArray countries = new WritableNativeArray();
        Iterator<String> iterator = this.countryCities.keys();
        while (iterator.hasNext()) {
            String key = iterator.next();
            countries.pushString((String) key);
        }
        callback.invoke(countries);
    }

    @ReactMethod
    public void getCitiesFor(String countryName, Callback callback) {
        WritableArray countryCities = new WritableNativeArray();
        try {
            JSONArray cityList = this.countryCities.getJSONArray(countryName);
            for (int i=0;i<cityList.length();i++){
                countryCities.pushString((String) cityList.get(i));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        callback.invoke(countryCities);
    }
}