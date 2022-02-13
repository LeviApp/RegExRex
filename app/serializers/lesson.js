import RESTSerializer from '@ember-data/serializer/rest';
import DS from "ember-data";
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { "lessons": payload};
        console.log("payload", payload);

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
}
)
